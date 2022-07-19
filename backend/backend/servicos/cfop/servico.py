from flask import Flask, jsonify
import mysql.connector as mysql

servico = Flask(__name__)

IS_ALIVE = "yes"
#IS_ALIVE = "no"

MYSQL_SERVER = "bancodados"
MYSQL_USER = "root"
MYSQL_PASS = "admin"
MYSQL_BANCO = "fiscal4"

def get_conexao_banco():
    conexao = mysql.connect(
        host=MYSQL_SERVER, user=MYSQL_USER, password=MYSQL_PASS, database=MYSQL_BANCO)

    return conexao

@servico.route("/isalive", methods=["GET"])
def is_alive():
    return jsonify(situacao = IS_ALIVE)

def gerar_cfop(registro):
    cfop = {
        "_id": registro["id"],
        "cfop": registro["cfop"],
        "descricao": registro["descricao"]
    }

    return cfop

@servico.route("/cfop")
def get_cfop():
    cfop = []

    conexao = get_conexao_banco()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "select id, descricao, cfop from cfop"
    )
    resultado = cursor.fetchall()
    for registro in resultado:
        cfop.append(gerar_cfop(registro))

    return jsonify(cfop)

if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=True
    )
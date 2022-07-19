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

def gerar_cest(registro):
    cest = {
        "_id": registro["id"],
        "cest": registro["cest"],
        "descricao": registro["descricao"],
        "ncm": registro["ncm"]
    }

    return cest

@servico.route("/cest")
def get_cest():
    cest = []

    conexao = get_conexao_banco()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "select id, descricao, cest, ncm from cest"
    )
    resultado = cursor.fetchall()
    for registro in resultado:
        cest.append(gerar_cest(registro))

    return jsonify(cest)

if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=True
    )
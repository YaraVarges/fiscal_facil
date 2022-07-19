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

def gerar_cst(registro):
    cst = {
        "_id": registro["id"],
        "cst": registro["cst"],
        "descricao": registro["descricao"],
        "regime": registro["regime"]
    }

    return cst

@servico.route("/cst")
def get_cst():
    cst = []

    conexao = get_conexao_banco()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "select id, cst, descricao, regime from cst"
    )
    resultado = cursor.fetchall()
    for registro in resultado:
        cst.append(gerar_cst(registro))

    return jsonify(cst)

@servico.route("/cst/<string:pesquisacst>")
def get_pesquisacst(pesquisacst):
    cst = []

    conexao = get_conexao_banco()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "select * from cst where cst.cst = "+ pesquisacst +""
    )
    resultado = cursor.fetchall()
    for registro in resultado:
        cst.append(gerar_cst(registro))

    return jsonify(cst)


if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=True
    )
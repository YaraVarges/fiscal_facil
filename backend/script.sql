/*SCRIPT DE CRIAÇÃO DO BANCO DE DADOS*/
CREATE DATABASE IF NOT EXISTS fiscal4;
USE fiscal4;

/*CRIAÇÃO DAS TABELAS DO BANCO*/
create table ncm(
	id int primary key,
    ncm varchar(10),
    descricao varchar(200)
);

create table cest(
	id int primary key,
    cest varchar(10),
    descricao varchar(200),
    ncm varchar (10)
);

create table cst(
	id int primary key,
    cst varchar(10),
    descricao varchar(200),
    regime varchar(25)
);

create table cfop(
	id int primary key,
    cfop varchar(10),
    descricao varchar(200)
);

/*INSERTS PARA POVOAR O BANCO DE DADOS*/
insert into ncm (id, ncm, descricao ) values (1, "1012100", "Cavalos, asininos e muares, vivos - Cavalos - Reprodutores de raça pura");
insert into ncm (id, ncm, descricao ) values (2, "1012900", "Cavalos, asininos e muares, vivos - Cavalos - Outros");
insert into ncm (id, ncm, descricao ) values (3, "1023990", "Animais vivos da espécie bovina - Búfalos - Outros - Outros");
insert into ncm (id, ncm, descricao ) values (4, "28391100", "Silicatos; silicatos dos metais alcalinos comerciais - De sódio - Metassilicatos");
insert into ncm (id, ncm, descricao ) values (5, "76052990", "Fios de alumínio - De ligas de alumínio - Outros - Outros");
insert into ncm (id, ncm, descricao ) values (6, "76090000", "Acessórios para tubos (por exemplo, uniões, cotovelos, luvas), de alumínio");
insert into ncm (id, ncm, descricao ) values (7, "84829990", "Rolamentos de esferas, de roletes ou de agulhas - Partes - Outras - Outras");
insert into ncm (id, ncm, descricao ) values (8, "87019090", "Tratores (exceto os carros-tratores da posição 87.09) - Outros");
insert into ncm (id, ncm, descricao ) values (9, "87049000", "Veículos automóveis para transporte de mercadorias - Outros");
insert into ncm (id, ncm, descricao ) values (10, "90318012", "Instrumentos, aparelhos e máquinas de medida ou controle, não especificados nem compreendidos noutras posições do presente Capítulo; projetores de perfis");
insert into ncm (id, ncm, descricao ) values (11, "29071200", "Fenóis; fenóis-álcoois - Monofenóis - Cresóis e seus sais");
insert into ncm (id, ncm, descricao ) values (12, "29391161", "Alcalóides vegetais, naturais ou reproduzidos por síntese, seus sais, éteres, ésteres e outros derivados");
insert into ncm (id, ncm, descricao ) values (13, "96100000", "Lousas e quadros para escrever ou desenhar, mesmo emoldurados");
insert into ncm (id, ncm, descricao ) values (14, "96180000", "Manequins e artigos semelhantes; autômatos e cenas animadas, para vitrines e mostruários");
insert into ncm (id, ncm, descricao ) values (15, "97030000", "Produções originais de arte estatuária ou de escultura, de quaisquer matérias");
insert into ncm (id, ncm, descricao ) values (16, "53110000", "Tecidos de outras fibras têxteis vegetais; tecidos de fios de papel");
insert into ncm (id, ncm, descricao ) values (17, "53092900", "Tecidos de linho - Que contenham menos de 85 %, em peso, de linho - Outros");
insert into ncm (id, ncm, descricao ) values (18, "22030000", "Cervejas de malte");

insert into cest (id, cest, descricao, ncm ) values (1, "0100100", "Catalisadores em colmeia cerâmica ou metálica para conversão catalítica de gases de escape de veículos e outros catalisadores", "38151210");
insert into cest (id, cest, descricao, ncm ) values (2, "0100300", "Protetores de caçamba", "39181000");
insert into cest (id, cest, descricao, ncm ) values (3, "0100400", "Reservatórios de óleo", "39233000");
insert into cest (id, cest, descricao, ncm ) values (4, "0100500", "Frisos, decalques, molduras e acabamentos", "39263000");
insert into cest (id, cest, descricao, ncm ) values (5, "0100700", "Juntas, gaxetas e outros elementos com função semelhante de vedação", "40169300");
insert into cest (id, cest, descricao, ncm ) values (6, "0100800", "Partes de veículos automóveis, tratores e máquinas autopropulsadas", "40161010");
insert into cest (id, cest, descricao, ncm ) values (7, "0101000", "Tecidos impregnados, revestidos, recobertos ou estratificados, com plástico", "59039000");
insert into cest (id, cest, descricao, ncm ) values (8, "0101200", "Encerados e toldos", "63061000");
insert into cest (id, cest, descricao, ncm ) values (9, "0101500", "Vidros de dimensões e formatos que permitam aplicação automotiva", "70071100");
insert into cest (id, cest, descricao, ncm ) values (10, "0102100", "Obras moldadas, de ferro fundido, ferro ou aço, exceto as do código 7325.91.00", "73259190");
insert into cest (id, cest, descricao, ncm ) values (11, "0601102", "Gás liquefeito de petróleo em botijão de 13 Kg (GLGNn)", "27111910");
insert into cest (id, cest, descricao, ncm ) values (12, "0800200", "Ferramentas, armações e cabos de ferramentas, de madeira", "44170010");
insert into cest (id, cest, descricao, ncm ) values (13, "1704600", "Misturas e preparações para bolos, em embalagem inferior 5 kg", "19012000");
insert into cest (id, cest, descricao, ncm ) values (14, "1900900", "Bobina para máquina de calcular, PDV ou equipamentos similares", "48025799");
insert into cest (id, cest, descricao, ncm ) values (15, "2102100", "Outras máquinas de lavar roupa, mesmo com dispositivos de secagem, de uso doméstico", "84501900");
insert into cest (id, cest, descricao, ncm ) values (16, "2801200", "Preparações para ondulação ou alisamento, permanentes, dos cabelos", "33052000");


insert into cst (id, cst, descricao, regime ) values (1, "101", "Tributada pelo Simples Nacional com permissão de crédito", "Simples Nacional");
insert into cst (id, cst, descricao, regime ) values (2, "102", "Tributada pelo Simples Nacional sem permissão de crédito", "Simples Nacional");
insert into cst (id, cst, descricao, regime ) values (3, "103", "Isenção do ICMS no Simples Nacional para faixa de receita bruta", "Simples Nacional");
insert into cst (id, cst, descricao, regime ) values (4, "201", "Tributada pelo Simples Nacional com permissão de crédito e com cobrança do ICMS por substituição tributária", "Simples Nacional");
insert into cst (id, cst, descricao, regime ) values (5, "202", "Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por substituição tributária", "Simples Nacional");
insert into cst (id, cst, descricao, regime ) values (6, "203", "Isenção do ICMS no Simples Nacional para faixa de receita bruta e com cobrança do ICMS por substituição tributária", "Simples Nacional");
insert into cst (id, cst, descricao, regime ) values (7, "300", "Imune", "Simples Nacional");
insert into cst (id, cst, descricao, regime ) values (8, "400", "Não tributada pelo Simples Nacional", "Simples Nacional");
insert into cst (id, cst, descricao, regime ) values (9, "500", "ICMS cobrado anteriormente por substituição tributária (substituído) ou por antecipação", "Simples Nacional");
insert into cst (id, cst, descricao, regime ) values (10, "900", "Outros", "Simples Nacional");
insert into cst (id, cst, descricao, regime ) values (11, "00", "Tributada integralmente", "Normal");
insert into cst (id, cst, descricao, regime ) values (12, "10", "Tributada e com cobrança do ICMS por substituição tributária", "Normal");
insert into cst (id, cst, descricao, regime ) values (13, "20", "Com redução da BC", "Normal");
insert into cst (id, cst, descricao, regime ) values (14, "30", "Isenta / não tributada e com cobrança do ICMS por substituição tributária", "Normal");
insert into cst (id, cst, descricao, regime ) values (15, "40", "Isenta", "Normal");
insert into cst (id, cst, descricao, regime ) values (16, "41", "Não tributada", "Normal");
insert into cst (id, cst, descricao, regime ) values (17, "50", "Com suspensão", "Normal");
insert into cst (id, cst, descricao, regime ) values (18, "51", "Com diferimento", "Normal");
insert into cst (id, cst, descricao, regime ) values (19, "60", "ICMS cobrado anteriormente por substituição tributária", "Normal");
insert into cst (id, cst, descricao, regime ) values (20, "70", "Com redução da BC e cobrança do ICMS por substituição tributária", "Normal");
insert into cst (id, cst, descricao, regime ) values (21, "90", "Outras", "Normal");


insert into cfop (id, cfop, descricao ) values (1, "1000", "ENTRADAS OU AQUISIÇÕES DE SERVIÇOS DO ESTADO");
insert into cfop (id, cfop, descricao ) values (2, "1101", "Compra para industrialização ou produção rural");
insert into cfop (id, cfop, descricao ) values (3, "1116", "Compra para industrialização ou produção rural originada de encomenda para recebimento futuro");
insert into cfop (id, cfop, descricao ) values (4, "1124", "Industrialização efetuada por outra empresa");
insert into cfop (id, cfop, descricao ) values (5, "1150", "TRANSFERÊNCIAS PARA INDUSTRIALIZAÇÃO, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS");
insert into cfop (id, cfop, descricao ) values (6, "1201", "Devolução de venda de produção do estabelecimento");
insert into cfop (id, cfop, descricao ) values (7, "1206", "Anulação de valor relativo à prestação de serviço de transporte");
insert into cfop (id, cfop, descricao ) values (8, "1251", "Compra de energia elétrica para distribuição ou comercialização");
insert into cfop (id, cfop, descricao ) values (9, "1552", "Transferência de bem do ativo imobilizado");
insert into cfop (id, cfop, descricao ) values (10, "2111", "Compra para industrialização de mercadoria recebida anteriormente em consignação industrial");
insert into cfop (id, cfop, descricao ) values (11, "2151", "Transferência para industrialização ou produção rural");
insert into cfop (id, cfop, descricao ) values (12, "2208", "Devolução de produção do estabelecimento, remetida em transferência");
insert into cfop (id, cfop, descricao ) values (13, "3301", "Aquisição de serviço de comunicação para execução de serviço da mesma natureza");
insert into cfop (id, cfop, descricao ) values (14, "5102", "Venda de mercadoria adquirida ou recebida de terceiros");
insert into cfop (id, cfop, descricao ) values (15, "6109", "Venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio");
insert into cfop (id, cfop, descricao ) values (16, "7654", "Venda de combustível ou lubrificante adquirido ou recebido de terceiros");


/*SELECT PARA VISUALIZAÇÃO DAS TABELAS*/
select * from cest;
select * from cst;
select * from cfop;
select * from ncm;

CREATE DATABASE IF NOT EXISTS bdcoldigo;

USE bdcoldigo;

CREATE TABLE IF NOT EXISTS marcas (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS produtos (
	id INT(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
    categoria TINYINT(1) UNSIGNED NOT NULL,
    modelo VARCHAR(45) NOT NULL,
    capacidade INT(4) UNSIGNED NOT NULL, 
    valor DECIMAL(7,2) UNSIGNED NOT NULL,
    marcas_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    INDEX fk_produtos_marcas_idx (marcas_id ASC),
    CONSTRAINT fk_produtos_marcas
		FOREIGN KEY (marcas_id)
        REFERENCES marcas (id)
);


SELECT * FROM marcas;
SELECT produtos.*, marcas.nome as marca FROM produtos INNER JOIN marcas ON produtos.marcas_id = marcas.id WHERE marcas.status = true;

UPDATE marcas SET status=1 WHERE id=51
/*
INSERT INTO marcas VALUES (1, "Brastempi");
INSERT INTO marcas VALUES (2, "Electroluxisis");
INSERT INTO marcas VALUES (3, "ComSulis");

INSERT INTO produtos VALUES (1, 1, "Aquele bom", 20, 4000.00, 2);
INSERT INTO produtos VALUES (2, 2, "Aquele segundo", 20, 4000.00, 2);
INSERT INTO produtos VALUES (3, 2, "3600 TEMP", 100, 5000, 1);

DELETE FROM produtos WHERE id = 4;
SET SQL_SAFE_UPDATES = 0;

SELECT * FROM produtos;
SELECT * FROM marcas;

SELECT * FROM marcas WHERE nome like "%Braste%" ORDER BY nome asc;
SELECT * FROM marcas WHERE nome like "123";
SELECT * FROM produtos WHERE marcas_id = 32;

UPDATE marcas SET nome="Brastempo" WHERE id=1;
DELETE FROM marcas WHERE id = 46;

ALTER TABLE marcas ADD status TINYINT(1) NOT NULL DEFAULT 1;
*/


/*
- Desafio: O que é aquele unsigned no id?
R: Unsigned significa que um número é "sem 
sinal", ou seja, será um número, maior ou 
igual á zero.

- Desafio: Pesquise sobre zerofill e os 
tipos de campo utilizados.
R: Zerofill é uma forma de mostrar um número
com zeros preenchidos.
*/

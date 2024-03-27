CREATE DATABASE livraria

CREATE TABLE LIVROS(
    ID  INT AUTO_INCREMENT PRIMARY KEY,
    TITULO CHAR(30),
    AUTOR CHAR(30),
    ANO INT(05)
);

        INSERT INTO LIVROS(TITULO, AUTOR, ANO) VALUES 
        ('A BIBLIOTECA DA MEIA-BOITE','MATT HAIG',2023),
        ('Inteligência Multifocal','Augusto Cury',1999),
        ('Pais Brilhantes, Professores Fascinantes','Augusto Cury',2003),
        ('Os Miseráveis','Victor hugo',1862),
        ('Impuros: A Legião de Exus','Osmar Barbosa',2019),
        ('O Poder do Hábito','Charles Duhigg',2012),
        ('Dom Quixote','Miguel de Cervantes',1605),
        ('Paraíso','Dante Alighieri',1321),
        ('O Príncipe','Nicolau Maquíavel',1532),
        ('O Pequeno Príncipe','Antoine de Saint-Exupéry',1943)

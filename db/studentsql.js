var StudentSql={
	insert:"INSERT INTO student(name,age,address) values(?,?,?)",
	queryAll:"SELECT * FROM STUDENT",
	findById:"SELECT * FROM STUDENT WHERE id = ?"
}

module.exports = StudentSql;

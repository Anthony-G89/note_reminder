module.exports = function (sequelize, DataTypes) {
    const Note = sequelize.define("Note", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    })

    Note.associate = models => {
        Note.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };
    return Note;
};

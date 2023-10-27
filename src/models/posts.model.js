const selectAllPost = () => {
    return db.query('select * from posts');
};

const selectPostById = (postId) => {
    return db.query('select * from posts where id = ?', [postId]);
};

const selectPostByAutorId = (autorId) => {
    return db.query('select * from posts where autor_id = ?', [autorId]);
};


const insertPost = ({ titulo, descripcion, fecha_creacion, categoria, autor_id }) => {
    return db.query(
        'insert into posts (titulo, descripcion, fecha_creacion, categoria, autor_id) values (?, ?, ?, ?, ?)',
        [titulo, descripcion, fecha_creacion, categoria, autor_id]
    );
};


const updatePostById = (postId, { titulo, descripcion, fecha_creacion, categoria, autor_id }) => {
    return db.query('update posts set titulo = ?, descripcion = ?, fecha_creacion = ?, categoria = ?, autor_id = ? where id = ?',
        [titulo, descripcion, fecha_creacion, categoria, autor_id, postId]);
};


const deletePostById = (postId) => {
    return db.query('delete from posts where id = ?', [postId]);
};

module.exports = {
    selectAllPost,
    selectPostById,
    selectPostByAutorId,
    insertPost,
    updatePostById,
    deletePostById
};
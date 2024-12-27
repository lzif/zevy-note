import db from "."

const getNoteByUserId = async (userId: string) => {
  return await db
    .selectFrom('note')
    .innerJoin('user', 'note.user_id', 'user.id')
    .where('user.id', '=', userId)
    .select([
      'note.id',
      'note.content',
      'note.created_at',
      'user.name',
    ])
    .execute();
}

const getNoteById = async (noteId: string) => {
  return await db
    .selectFrom('note')
    .where('note.id', '=', noteId)
    .select([
      'note.id',
      'note.content',
      'note.created_at',
    ])
    .execute();
}

export { getNoteByUserId, getNoteById }

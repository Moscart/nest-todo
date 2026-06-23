import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DATABASE_CONNECTION } from '../../database/database.module';
import { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import { eq } from 'drizzle-orm';
import { todos } from './schema/todo.schema';
import * as schema from './schema/todo.schema';

@Injectable()
export class TodoService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly db: BetterSQLite3Database<typeof schema>,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    const result = this.db
      .insert(todos)
      .values({
        title: createTodoDto.title,
        description: createTodoDto.description,
      })
      .returning()
      .get();
    return result;
  }

  findAll() {
    return this.db.select().from(todos).all();
  }

  findOne(id: number) {
    const todo = this.db.select().from(todos).where(eq(todos.id, id)).get();
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = this.db
      .update(todos)
      .set({
        title: updateTodoDto.title,
        description: updateTodoDto.description,
        isCompleted: updateTodoDto.isCompleted,
      })
      .where(eq(todos.id, id))
      .returning()
      .get();
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  remove(id: number) {
    const todo = this.db
      .delete(todos)
      .where(eq(todos.id, id))
      .returning()
      .get();
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private readonly todos: Todo[] = [];
  private idCounter = 1;

  create(createTodoDto: CreateTodoDto) {
    const newTodo: Todo = {
      id: this.idCounter++,
      title: createTodoDto.title,
      description: createTodoDto.description,
      isCompleted: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = this.findOne(id);
    if (updateTodoDto.title !== undefined) todo.title = updateTodoDto.title;
    if (updateTodoDto.description !== undefined)
      todo.description = updateTodoDto.description;
    if (updateTodoDto.isCompleted !== undefined)
      todo.isCompleted = updateTodoDto.isCompleted;
    return todo;
  }

  remove(id: number) {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    const removed = this.todos.splice(index, 1);
    return removed[0];
  }
}

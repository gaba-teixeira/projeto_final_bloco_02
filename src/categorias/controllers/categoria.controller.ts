import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../entities/categoria.entity';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';


 @Controller('/categorias')
 export class CategoriaController {
   constructor(private readonly categoriaService: CategoriaService) {}

   @Get()
   @HttpCode(HttpStatus.OK)
   findAll(): Promise<Categoria[]> {
     return this.categoriaService.findAll();
   }

   @Get('/:id')
   @HttpCode(HttpStatus.OK)
   findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
     return this.categoriaService.findById(id);
   }

   @Get('/descricao/:descricao')
   @HttpCode(HttpStatus.OK)
   findByDescicao(@Param('descricao') descricao: string): Promise<Categoria[]> {
     return this.categoriaService.findByDescricao(descricao);
   }

   @UseGuards(JwtAuthGuard)
   @Post()
   @HttpCode(HttpStatus.CREATED)
   create(@Body() categoria: Categoria): Promise<Categoria> {
     return this.categoriaService.create(categoria);
   }

   @UseGuards(JwtAuthGuard)
   @Put()
   @HttpCode(HttpStatus.OK)
   update(@Body() categoria: Categoria): Promise<Categoria> {
     return this.categoriaService.update(categoria);
   }

   @UseGuards(JwtAuthGuard)
   @Delete('/:id')
   @HttpCode(HttpStatus.NO_CONTENT)
   delete(@Param('id', ParseIntPipe) id: number) {
     return this.categoriaService.delete(id);
   }
 }

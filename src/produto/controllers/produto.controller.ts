import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseFloatPipe,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../entities/produto.entity';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

 @Controller('/produtos')
 export class ProdutoController {
   constructor(private readonly produtoService: ProdutoService) {}

   @Get()
   @HttpCode(HttpStatus.OK)
   findAll(): Promise<Produto[]> {
     return this.produtoService.findAll();
   }

   @Get('/:id')
   @HttpCode(HttpStatus.OK)
   findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
     return this.produtoService.findById(id);
   }

   @Get('/nome/:nome')
   @HttpCode(HttpStatus.OK)
   findByName(@Param('nome') nome: string): Promise<Produto[]> {
     return this.produtoService.findByName(nome);
   }

   @Get('/marca/:marca')
   @HttpCode(HttpStatus.OK)
   findByMarca(@Param('marca') marca: string): Promise<Produto[]> {
     return this.produtoService.findByMarca(marca);
   }

   @UseGuards(JwtAuthGuard)
   @Post()
   @HttpCode(HttpStatus.CREATED)
   create(@Body() produto: Produto): Promise<Produto> {
     return this.produtoService.create(produto);
   }

   @UseGuards(JwtAuthGuard)
   @Put()
   @HttpCode(HttpStatus.OK)
   update(@Body() produto: Produto): Promise<Produto> {
     return this.produtoService.update(produto);
   }

   @UseGuards(JwtAuthGuard)
   @Delete('/:id')
   @HttpCode(HttpStatus.NO_CONTENT)
   delete(@Param('id', ParseIntPipe) id: number) {
     return this.produtoService.delete(id);
   }
 }

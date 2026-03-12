import { Body, Controller, Get, Post } from '@nestjs/common'
import { KosService } from './kos.service'

@Controller('kos')
export class KosController {

constructor(private service: KosService) {}

@Post()
create(@Body() body:any){
return this.service.create(body)
}

@Get()
findAll(){
return this.service.findAll()
}

}

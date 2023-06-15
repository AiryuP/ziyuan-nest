import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository }from '@nestjs/typeorm'
import { Code } from './entities/code.entity'

@Injectable()
export class CodeService {
    constructor(@InjectRepository(Code) private readonly code:Repository<Code> ){}

    addCode(item){
        console.log(item)
        const data = new Code()
        data.title = item.title
        data.synopsis = item.synopsis
        data.content = item.content
        data.images = item.images
        data.tags = item.tags
        data.url = item.url
        data.createTime = item.createTime
        // data.id = item.id
        data.watchNum = item.watchNum

        console.log(data)


        return this.code.save(data)
    }

    deteleCode(){

    }
    async getAllList() {
        let list = await this.code.find();

        return list;
    }
}

import { Controller,Get,Post,Request } from '@nestjs/common';
import { CodeService } from './code.service';

@Controller('api')
export class CodeController {
    constructor( private codeService: CodeService ){}

    @Post('/addCode')
    addCode(@Request() req):any{
        console.log(req)
        return this.codeService.addCode(req.body)

    }

    @Get('/getCode')
    getCodeList():any{
        return this.codeService.getAllList()
    }
}

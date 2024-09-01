import {
  Controller,
  Post,
  Get,
  Body,
  UploadedFile,
  UseInterceptors,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DealService } from './deal.service';
import { Deal } from './deal.entity';
import { diskStorage } from 'multer';
import { Response } from 'express';

@Controller('deal')
export class DealController {
  constructor(private readonly dealService: DealService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('attachment', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const originalName = file.originalname;
          callback(null, originalName);
        },
      }),
    }),
  )
  async create(
    @Body() dealData: Partial<Deal>,
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const createdDeal = await this.dealService.create(
        dealData,
        file.filename,
      );

      return res.status(HttpStatus.CREATED).json({
        status: 'success',
        message: 'Deal created successfully!',
        data: createdDeal,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: 'error',
        message: 'Failed to create deal.',
        error: error.message,
      });
    }
  }

  @Get()
  async findAll(@Res() res: Response): Promise<any> {
    try {
      const deals = await this.dealService.findAll();

      const dealsWithUrls = deals.map((deal) => ({
        ...deal,
        attachmentUrl: deal.attachment
          ? `http://localhost:8080/uploads/${deal.attachment}`
          : null,
      }));

      return res.status(HttpStatus.OK).json({
        status: 'success',
        message: 'Deals retrieved successfully!',
        data: dealsWithUrls,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: 'error',
        message: 'Failed to retrieve deals.',
        error: error.message,
      });
    }
  }
}

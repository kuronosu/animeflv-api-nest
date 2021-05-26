import { Controller } from '@nestjs/common';
import { GenricEntityController } from 'src/common/generic.controller';
import { State } from '../entities';
import { StatesService } from '../services/states.service';

@Controller('states')
export class StatesController extends GenricEntityController<
  State,
  StatesService
> {
  constructor(service: StatesService) {
    super(service);
  }
}

import { HttpService } from '@nestjs/axios';
import { CarService } from './car.service';
import { CarDto } from './dot/car.dot';
export declare class CarController {
    private readonly carService;
    private readonly httpService;
    constructor(carService: CarService, httpService: HttpService);
    findAll(): Promise<import("./entities/car.entity").Car[]>;
    findUserCar(query: any): Promise<any[]>;
    createCar(createCar: CarDto): Promise<CarDto & import("./entities/car.entity").Car>;
    updateCar(updateCar: CarDto): Promise<import("typeorm").UpdateResult>;
}

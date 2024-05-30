import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';
import { CarDto } from './dot/car.dot';
export declare class CarService {
    private carRepository;
    constructor(carRepository: Repository<Car>);
    findAll(): Promise<Car[]>;
    findUser(userId: string): Promise<any[]>;
    create(carInfo: CarDto): Promise<CarDto & Car>;
    update(carInfo: CarDto): Promise<import("typeorm").UpdateResult>;
}

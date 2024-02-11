import { UserForRegisterDto } from "./userForRegisterDto";

export interface RegisterRequest {
  userForRegisterDto: UserForRegisterDto;
  nationalIdentificationNumber: string;
}

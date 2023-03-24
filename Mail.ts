import { IMail } from './IMail';

export class Mail implements IMail {
  constructor(public tipo: string, public direccion: string) {}
}

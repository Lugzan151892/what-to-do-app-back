enum EBUDGET_TYPE {
  FREE = 'FREE'
}

export class GenerateRequestDto {
  city: number
  group_size: number
  new?: boolean
  budget: EBUDGET_TYPE = EBUDGET_TYPE.FREE
}
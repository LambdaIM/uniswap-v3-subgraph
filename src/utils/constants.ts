import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

import { Factory as FactoryContract } from '../types/templates/Pool/Factory'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0x1B0CAB9855148D55B9e26E83e87887425ed2bb53'

export const ZERO_BI = BigInt.fromI32(0)
export const ONE_BI = BigInt.fromI32(1)
export const ZERO_BD = BigDecimal.fromString('0')
export const ONE_BD = BigDecimal.fromString('1')
export const BI_18 = BigInt.fromI32(18)

export const factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

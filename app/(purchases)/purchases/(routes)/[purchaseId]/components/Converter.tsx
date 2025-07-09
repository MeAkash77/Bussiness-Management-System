'use client'

import { FC } from 'react'

import { PurchasesForm } from '@/forms'
import { PurchaseProps } from '@/types'

import { purchaseFields } from '@/formFields'

import FormContent from '@/components/FormContent'

interface ConverterProps {
  id: string
  data: PurchaseProps
}

const Converter: FC<ConverterProps> = ({ id, data }) => {
  return (
    <FormContent
      initialData={data}
      type='Purchase'
      urlType='purchases'
      id={id}
      formType={PurchasesForm(data)}
      fieldArray={purchaseFields}
    />
  )
}

export default Converter

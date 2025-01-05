import { defaultButtonLabel } from '../constants'
import { RatingInputBlock } from '../rating'

export const defaultRatingInputOptions = {
  buttonType: 'Numbers',
  length: 10,
  labels: {
    button: defaultButtonLabel,
  },
  customIcon: { isEnabled: false },
  isOneClickSubmitEnabled: false,
} as const satisfies RatingInputBlock['options']

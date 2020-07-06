/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  market: {
    id: `${scope}.market`,
    defaultMessage: 'Маркет',
  },
  invest: {
    id: `${scope}.invest`,
    defaultMessage: 'Инвестиции',
  },
  relax: {
    id: `${scope}.relax`,
    defaultMessage: 'Отдых',
  },
  relocation: {
    id: `${scope}.relocation`,
    defaultMessage: 'Переезд',
  },
});

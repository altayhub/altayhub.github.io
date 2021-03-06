import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import CenteredSection from './CenteredSection';


function Footer() {
  return (
    <Wrapper>
      <CenteredSection>

        <section>
          <FormattedMessage {...messages.licenseMessage} />
        </section>
        {/* <section>
        <LocaleToggle />
      </section> */}
        {/*<section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
          }}
        />
      </section> */}
      </CenteredSection>

    </Wrapper>
  );
}

export default Footer;

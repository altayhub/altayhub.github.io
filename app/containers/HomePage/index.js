/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Logo from './logo.png';
import Img from './Img';
import './HomePage.css'

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <article>

      <Helmet>
        <title>AltayHub.com</title>
        <meta
          name="description"
          content="About Altay Republic"
        />
      </Helmet>
      <div className="">
        <video id="background-video" loop autoPlay muted className="Video">
          <source src="https://disk.yandex.ru/client/disk?source=domik-main&idApp=client&dialog=slider&idDialog=%2Fdisk%2F466495109.mp4" type="video/mp4" />
          <source src="https://vod-progressive.akamaized.net/exp=1594042314~acl=%2A%2F466495109.mp4%2A~hmac=1ed61d9c68a5a80b844b380a751d10aec2b2533e577fa82117495a992d5d1321/vimeo-prod-skyfire-std-us/01/380/6/151902345/466495109.mp4?download=1&filename=Altay.mp4" type="video/ogg" />
                Your browser does not support the video tag.
        </video>

        <div className="Content">
          <CenteredSection>
            <Img src={Logo} alt="AltayHub" />

            {/* <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2> */}
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>

            <H2>
              {/* <FormattedMessage {...messages.trymeHeader} /> */}
            </H2>

            {/* <Form onSubmit={onSubmitForm}>
             <H2> <label htmlFor="username">
                <FormattedMessage {...messages.trymeMessage} />
                <AtPrefix>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </AtPrefix>
                <Input
                  id="username"
                  type="text"
                  placeholder="mxstbr"
                  value={username}
                  onChange={onChangeUsername}
                  style={{color:'white'}}
                />
              </label></H2>
            </Form>
            <ReposList {...reposListProps} /> */}
          </CenteredSection>
        </div>

      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);

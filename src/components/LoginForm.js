import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection, Input, Button, Spinner } from "./common";
import { emailChanged, passwordChanged, loginUser } from "../actions";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <View style={{ marginTop: 120 }}>
        <View>
          <Text style={styles.loginTextStyle}>User Manager</Text>
        </View>
        <Card style={styles.loginCardStyle}>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Password"
              placeholder="password"
              secureTextEntry
              onChangeText={this.onPasswordChanged.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          {this.renderError()}

          <CardSection>{this.renderButton()}</CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  },
  loginCardStyle: {
    justifyContent: "center",
    alignSelf: "center"
  },
  loginTextStyle: {
    fontSize: 30,
    padding: 20,
    textAlign: "center",
    marginBottom: 50
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, loading, error } = auth;

  return {
    email,
    password,
    loading,
    error
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);

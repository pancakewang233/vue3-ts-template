export const validateName = (rule: any, value: string, callback: (error?: string | Error) => void) => {
  if (value === '') {
    callback(new Error('请输入用户名'));
  } else {
    callback();
  }
};

export const validatePass = (rule: any, value: string | number, callback: (error?: string | Error) => void) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else if(JSON.stringify(value).length < 6){
    callback(new Error('密码长度不能小于6'));
  }else {
    callback();
  }
};

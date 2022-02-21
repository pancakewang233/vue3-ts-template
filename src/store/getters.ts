interface State {
    app:{
      sidebar:string,
      device:string
    },
    user:{
      token:string,
      avatar:string,
      name:string
    }

}
const getters = {
  sidebar: (state:State) => state.app.sidebar,
  device: (state:State) => state.app.device,
  token: (state:State) => state.user.token,
  avatar: (state:State) => state.user.avatar,
  name: (state:State) => state.user.name
}
export default getters

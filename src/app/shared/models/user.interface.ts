// export interface UserApiResponse {
//   data: UserData
//   message: string
//   statusCode: number
//   success: boolean
// }

export interface UserData {
  accessToken: string
  refreshToken: string
  user: User
}

export interface User {
  createdAt: string
  _id: string
  username: string
  email: string
  password: string
  __v: number
}

// export interface User {
//   __v: number
//   _id: string
//   avatar: Avatar
//   createdAt: string
//   email: string
//   isEmailVerified: boolean
//   loginType: string
//   role: string
//   updatedAt: string
//   username: string
// }

export interface Avatar {
  _id: string
  localPath: string
  url: string
}


export interface UserApiResponse {
  token: string
}

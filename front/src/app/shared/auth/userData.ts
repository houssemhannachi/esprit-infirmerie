export interface Authority {
  authority: string
}

export interface UserData {
  username: string,
  authorities: Authority[]
}

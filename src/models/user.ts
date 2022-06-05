export class User {
  public userName: string;
  public linkAvatar: string;
  constructor(userName, linkAvatar) {
    this.userName = userName;
    this.linkAvatar = linkAvatar;
  }

  getuser(): string {
    return this.userName;
  }

  getlinkAvatar(): string {
    return this.linkAvatar;
  }
}
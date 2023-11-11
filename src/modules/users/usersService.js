import { UserInterface } from "./usersInterface";
import { UserNotFound } from "./usersException";

export class UserService extends UserInterface {
  constructor(userModel, passwordService) {
    super();
    this.userModel = userModel;
    this.passwordService = passwordService;
  }

  async getAll() {
    return await this.userModel
      .find({
        status: true,
      })
      .populate([
        {
          path: "role",
          select: ["-status", "-created_at", "-updated_at"],
        },
      ])
      .select(["-password"])
      .sort({
        // -1 -> DESC
        // 1 -> ASC
        created_at: 1,
      });
  }

  async getById(username) {
    const user = await this.userModel.findOne({ username });
    if (!user) {
      throw new UserNotFound();
    }
    return user;
  }

  async create(body) {
    const hashPassword = await this.passwordService.hashPassword(body.password);
    body.password = hashPassword;
    return await this.userModel.create(body);
  }

  async update(id, body) {
    const user = await this.getById(id);
    if (!user) {
      throw new UserNotFound();
    }

    if ("password" in body) {
      const hashPassword = await this.passwordService.hashPassword(
        body.password
      );
      body.password = hashPassword;
    }
    await user.updateOne(body);

    return user;
  }

  async delete(id) {
    const user = await this.getById(id);
    if (!user) {
      throw new UserNotFound();
    }
    await user.deleteOne();
    return user;
  }
}

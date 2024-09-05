import User from "./User";
import Post from "./Post";
import Favorites from "./Favorites";

Post.belongsTo(User)
User.hasMany(Post)

Favorites.belongsTo(User)
User.hasMany(Favorites)

Favorites.belongsTo(Post)
Post.hasMany(Favorites)
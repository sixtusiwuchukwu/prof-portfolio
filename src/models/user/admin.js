const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  gmail: {
    type: String,
    trim: true,
    minlength: 5,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    minlength: 4,
  },
  username: {
    type: String,
    trim: true,
    minlength: 4,
    unique: true,
  },
  avater: {
    type: String,
    trim: true,
    default:
      "https://res.cloudinary.com/defbw7rt6/image/upload/v1605740369/proff-blog/profile-image/default-image_aamwsz.jpg",
  },
});

/*
======
compare input password against bcrypted password
======
  */
adminSchema.statics.comparePassword = async (password, userPassword) =>
  await bcrypt.compare(password, userPassword);

/*
======
check for password modification before encrypting
======
  */
adminSchema.pre("save", function hookSave(next) {
  const user = this;
  if (!user.isModified("password")) return next();
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next();
});

module.exports = mongoose.model("admin", adminSchema);

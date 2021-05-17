import Register from "../models/Register";

export default {
  render(register: Register) {
    return {
      id: register.id,
      name: register.name,
      university: register.university,
      course: register.course,
      department: register.department,
      score: register.score,
      date: register.date,
    }
  },

  renderMany(registers: Register[]) {
    return registers.map(register => this.render(register));
  }
}
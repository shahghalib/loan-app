const Loan = require('../models/loan.model');
const NotFoundError = require('../errors/not-found.error');

class LoanService {

  async getAll() {
    const loans = await Loan.findAll({
      order: [['created_at', 'DESC']],
    });
    return loans;
  }

  async getOne(id) {
    const loan = await Loan.findByPk(id);
    if (!loan) {
      throw new NotFoundError(`Loan with id ${id} not found`);
    }
    return loan;
  }

  async create(data) {
    const loan = await Loan.create(data);
    return loan;
  }
  async update(id, data) {
    const loan = await this.getOne(id);
    await loan.update(data);
    return loan;
  }

  async remove(id) {
    const loan = await this.getOne(id);
    await loan.destroy();
    return { message: `Loan ${id} deleted successfully` };
  }
}

module.exports = new LoanService();

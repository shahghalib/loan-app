const { Loan } = require('../database/models/index');
const { NotFoundError } = require('../errors/base.error');
const { LOAN_STATUS_FILTER } = require('../enums/loan-status.enum');

class LoanService {

  // Fetch loans — optionally filtered by status, always paginated
  async getAllLoans({ status, page, limit }) {
    const whereClause = {};

    if (status && status !== LOAN_STATUS_FILTER.ALL) {
      whereClause.status = status;
    }

    const offset = (page - 1) * limit;

    const { count, rows } = await Loan.findAndCountAll({
      where: whereClause,
      order: [['created_at', 'DESC']],
      limit,
      offset,
    });

    return {
      data: rows,
      pagination: {
        totalRecords: count,
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        limit,
      },
    };
  }

  // Fetch a single loan by ID — throws NotFoundError if missing
  async getLoanById(id) {
    const loan = await Loan.findByPk(id);
    if (!loan) {
      throw new NotFoundError(`Loan with id ${id} not found`);
    }
    return loan;
  }

  // Create a new loan record
  async createLoan(data) {
    const loan = await Loan.create(data);
    return loan;
  }

  // Update a loan — throws NotFoundError if missing
  async updateLoan(id, data) {
    const loan = await this.getLoanById(id);
    await loan.update(data);
    return loan;
  }

  // Delete a loan — throws NotFoundError if missing
  async deleteLoan(id) {
    const loan = await this.getLoanById(id);
    await loan.destroy();
    return { message: `Loan ${id} deleted successfully` };
  }
}

module.exports = new LoanService();

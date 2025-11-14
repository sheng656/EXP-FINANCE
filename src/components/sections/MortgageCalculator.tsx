import { useState } from 'react';
import { Calculator, TrendingUp, Home, Percent, Calendar, DollarSign, AlertCircle, Zap, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useI18n } from '../../lib/i18n-context';

type PaymentFrequency = 'weekly' | 'fortnightly' | 'monthly';

export function MortgageCalculator() {
  const { locale } = useI18n();
  
  // Calculator inputs
  const [propertyPrice, setPropertyPrice] = useState(800000);
  const [deposit, setDeposit] = useState(160000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [paymentFrequency, setPaymentFrequency] = useState<PaymentFrequency>('fortnightly');
  const [extraPayment, setExtraPayment] = useState(0);
  
  // Payment frequency calculations
  const getPaymentsPerYear = (frequency: PaymentFrequency) => {
    switch (frequency) {
      case 'weekly': return 52;
      case 'fortnightly': return 26;
      case 'monthly': return 12;
    }
  };
  
  const paymentsPerYear = getPaymentsPerYear(paymentFrequency);
  const loanAmount = propertyPrice - deposit;
  const depositPercentage = (deposit / propertyPrice) * 100;
  
  // Standard loan calculations (without extra payments)
  const periodicRate = interestRate / 100 / paymentsPerYear;
  const totalPayments = loanTerm * paymentsPerYear;
  const regularPayment = loanAmount * (periodicRate * Math.pow(1 + periodicRate, totalPayments)) / (Math.pow(1 + periodicRate, totalPayments) - 1);
  const totalPaymentStandard = regularPayment * totalPayments;
  const totalInterestStandard = totalPaymentStandard - loanAmount;
  
  // Calculations with extra payments
  const calculateWithExtraPayments = () => {
    if (extraPayment === 0) {
      return {
        totalPayments: totalPayments,
        totalPaid: totalPaymentStandard,
        totalInterest: totalInterestStandard,
        timeSaved: 0,
        moneySaved: 0,
        yearsToPayoff: loanTerm
      };
    }
    
    let balance = loanAmount;
    let paymentCount = 0;
    let totalPaid = 0;
    const maxPayments = totalPayments * 2; // Safety limit
    
    while (balance > 0 && paymentCount < maxPayments) {
      const interestCharge = balance * periodicRate;
      const principalPayment = regularPayment - interestCharge + extraPayment;
      
      if (balance <= principalPayment) {
        totalPaid += balance + interestCharge;
        balance = 0;
      } else {
        balance -= principalPayment;
        totalPaid += regularPayment + extraPayment;
      }
      
      paymentCount++;
    }
    
    const totalInterest = totalPaid - loanAmount;
    const timeSaved = totalPayments - paymentCount;
    const moneySaved = totalInterestStandard - totalInterest;
    const yearsToPayoff = paymentCount / paymentsPerYear;
    
    return {
      totalPayments: paymentCount,
      totalPaid,
      totalInterest,
      timeSaved,
      moneySaved,
      yearsToPayoff
    };
  };
  
  const extraPaymentResults = calculateWithExtraPayments();
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-NZ', {
      style: 'currency',
      currency: 'NZD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-NZ').format(value);
  };
  
  const getFrequencyLabel = (frequency: PaymentFrequency) => {
    if (locale === 'zh') {
      switch (frequency) {
        case 'weekly': return '每周';
        case 'fortnightly': return '每两周';
        case 'monthly': return '每月';
      }
    } else {
      switch (frequency) {
        case 'weekly': return 'Weekly';
        case 'fortnightly': return 'Fortnightly';
        case 'monthly': return 'Monthly';
      }
    }
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <Calculator className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="mb-4">
            {locale === 'zh' ? '房贷计算器' : 'Mortgage Calculator'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {locale === 'zh'
              ? '快速估算您的每月还款额'
              : 'Quick estimate of your monthly repayments'}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Input Section */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-yellow-100">
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-yellow-600" />
                  {locale === 'zh' ? '贷款参数' : 'Loan Parameters'}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                
                {/* Property Price */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      {locale === 'zh' ? '房产价格' : 'Property Price'}
                    </label>
                    <span className="text-lg font-semibold text-gray-900">
                      {formatCurrency(propertyPrice)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="200000"
                    max="3000000"
                    step="10000"
                    value={propertyPrice}
                    onChange={(e) => setPropertyPrice(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$200k</span>
                    <span>$3M</span>
                  </div>
                </div>

                {/* Deposit */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      {locale === 'zh' ? '首付金额' : 'Deposit Amount'}
                    </label>
                    <div className="text-right">
                      <span className="text-lg font-semibold text-gray-900">
                        {formatCurrency(deposit)}
                      </span>
                      <span className="text-sm text-gray-500 ml-2">
                        ({depositPercentage.toFixed(1)}%)
                      </span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={propertyPrice * 0.1}
                    max={propertyPrice * 0.5}
                    step="5000"
                    value={deposit}
                    onChange={(e) => setDeposit(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10%</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      {locale === 'zh' ? '年利率' : 'Interest Rate (p.a.)'}
                    </label>
                    <span className="text-lg font-semibold text-gray-900">
                      {interestRate.toFixed(2)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="10"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>3%</span>
                    <span>10%</span>
                  </div>
                </div>

                {/* Loan Term */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      {locale === 'zh' ? '贷款年限' : 'Loan Term'}
                    </label>
                    <span className="text-lg font-semibold text-gray-900">
                      {loanTerm} {locale === 'zh' ? '年' : 'years'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5 yrs</span>
                    <span>30 yrs</span>
                  </div>
                </div>

                {/* Payment Frequency */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-3 block">
                    {locale === 'zh' ? '还款频率' : 'Payment Frequency'}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['weekly', 'fortnightly', 'monthly'] as PaymentFrequency[]).map((freq) => (
                      <button
                        key={freq}
                        onClick={() => setPaymentFrequency(freq)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          paymentFrequency === freq
                            ? 'bg-yellow-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {getFrequencyLabel(freq)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Extra Payment */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                      <Zap className="w-4 h-4 text-yellow-600" />
                      {locale === 'zh' ? '额外还款' : 'Extra Payment'}
                    </label>
                    <span className="text-lg font-semibold text-gray-900">
                      {extraPayment === 0 ? (locale === 'zh' ? '无' : 'None') : formatCurrency(extraPayment)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="50"
                    value={extraPayment}
                    onChange={(e) => setExtraPayment(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$0</span>
                    <span>$1,000 / {getFrequencyLabel(paymentFrequency).toLowerCase()}</span>
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* Results Section */}
            <div className="space-y-6">
              
              {/* Payment Amount - Highlight Card */}
              <Card className="shadow-lg border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-white">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-3">
                      <DollarSign className="w-6 h-6 text-yellow-600" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {locale === 'zh' ? `${getFrequencyLabel(paymentFrequency)}还款额` : `${getFrequencyLabel(paymentFrequency)} Repayment`}
                    </p>
                    <p className="text-4xl font-bold text-gray-900 mb-1">
                      {formatCurrency(regularPayment + extraPayment)}
                    </p>
                    {extraPayment > 0 && (
                      <div className="mt-2 pt-2 border-t border-yellow-200">
                        <p className="text-xs text-gray-600">
                          {locale === 'zh' ? '包含额外还款' : 'Includes extra payment'}
                        </p>
                        <p className="text-sm font-medium text-gray-700">
                          {formatCurrency(regularPayment)} + {formatCurrency(extraPayment)}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Extra Payment Benefits - Show only if extra payment > 0 */}
              {extraPayment > 0 && extraPaymentResults.moneySaved > 0 && (
                <Card className="shadow-lg border-2 border-green-400 bg-gradient-to-br from-green-50 to-white">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">
                          {locale === 'zh' ? '额外还款节省' : 'Extra Payment Savings'}
                        </p>
                        <p className="text-2xl font-bold text-green-600">
                          {formatCurrency(extraPaymentResults.moneySaved)}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-green-200">
                      <div>
                        <p className="text-xs text-gray-600 mb-1">
                          {locale === 'zh' ? '提前还清' : 'Time Saved'}
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {(extraPaymentResults.timeSaved / paymentsPerYear).toFixed(1)} {locale === 'zh' ? '年' : 'years'}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">
                          {locale === 'zh' ? '实际年限' : 'Actual Term'}
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {extraPaymentResults.yearsToPayoff.toFixed(1)} {locale === 'zh' ? '年' : 'years'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Summary Cards */}
              <div className="grid grid-cols-2 gap-4">
                
                <Card className="shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">
                          {locale === 'zh' ? '贷款金额' : 'Loan Amount'}
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          {formatCurrency(loanAmount)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Percent className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">
                          {locale === 'zh' ? '总利息' : 'Total Interest'}
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          {formatCurrency(extraPaymentResults.totalInterest)}
                        </p>
                        {extraPayment > 0 && (
                          <p className="text-xs text-gray-500 line-through mt-0.5">
                            {formatCurrency(totalInterestStandard)}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">
                          {locale === 'zh' ? '还款总额' : 'Total Repayment'}
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          {formatCurrency(extraPaymentResults.totalPaid)}
                        </p>
                        {extraPayment > 0 && (
                          <p className="text-xs text-gray-500 line-through mt-0.5">
                            {formatCurrency(totalPaymentStandard)}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">
                          {locale === 'zh' ? '还清时间' : 'Payoff Time'}
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          {extraPaymentResults.yearsToPayoff.toFixed(1)} {locale === 'zh' ? '年' : 'yrs'}
                        </p>
                        {extraPayment > 0 && (
                          <p className="text-xs text-gray-500 line-through mt-0.5">
                            {loanTerm} {locale === 'zh' ? '年' : 'yrs'}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>

              {/* Visual Breakdown */}
              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    {locale === 'zh' ? '还款构成' : 'Repayment Breakdown'}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full transition-all duration-300"
                          style={{ width: `${(loanAmount / extraPaymentResults.totalPaid) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-600 w-24 text-right">
                        {locale === 'zh' ? '本金' : 'Principal'} {((loanAmount / extraPaymentResults.totalPaid) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-purple-500 rounded-full transition-all duration-300"
                          style={{ width: `${(extraPaymentResults.totalInterest / extraPaymentResults.totalPaid) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-600 w-24 text-right">
                        {locale === 'zh' ? '利息' : 'Interest'} {((extraPaymentResults.totalInterest / extraPaymentResults.totalPaid) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  
                  {/* Comparison with standard loan */}
                  {extraPayment > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-600 mb-2">
                        {locale === 'zh' ? '对比标准贷款：' : 'vs Standard Loan:'}
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-green-50 p-2 rounded">
                          <p className="text-gray-600">{locale === 'zh' ? '节省利息' : 'Interest Saved'}</p>
                          <p className="font-semibold text-green-600">{formatCurrency(extraPaymentResults.moneySaved)}</p>
                        </div>
                        <div className="bg-blue-50 p-2 rounded">
                          <p className="text-gray-600">{locale === 'zh' ? '提前还清' : 'Time Saved'}</p>
                          <p className="font-semibold text-blue-600">
                            {(extraPaymentResults.timeSaved / paymentsPerYear).toFixed(1)} {locale === 'zh' ? '年' : 'yrs'}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

            </div>

          </div>

          {/* Disclaimer */}
          <Card className="mt-8 border-yellow-200 bg-yellow-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-700 mb-3">
                    {locale === 'zh'
                      ? '此计算器仅供参考。实际还款可能因银行费用、保险等因素而异。建议咨询专业贷款顾问。'
                      : 'This calculator is for reference only. Actual repayments may vary due to bank fees, insurance, and other factors. We recommend consulting a professional mortgage advisor.'}
                  </p>
                  <Button
                    asChild
                    className="bg-yellow-600 hover:bg-yellow-700"
                  >
                    <a href="#contact">
                      {locale === 'zh' ? '联系我们获取专业建议' : 'Contact Us for Expert Advice'}
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}

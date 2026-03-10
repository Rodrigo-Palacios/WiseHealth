
export function createOrderPlan(plan, cardsVM) {
    
    const planSelected = cardsVM.find(p => p.plan === plan).items;
    const planAmount = planSelected.find(item => item.label === "Costo anual").value;

    const orderPlan = {
        orderId: crypto.randomUUID(),
        planId: plan,
        amount:  Number(planAmount.toFixed(2)),
        currency: "MXN",
        status: "draft",
        createdAt: new Date().toISOString(),

    }
    
    localStorage.setItem('saveOrder', JSON.stringify(orderPlan));
    
}
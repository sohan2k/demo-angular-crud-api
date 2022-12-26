export interface IOffer {
    id: number,
    name: string,
    description: string,
    discount: number,
    offerType: string,
    couponCode: string,
    userType: string,
    maxNoOfUse: number,
    maxDiscount: number,
    isActive: boolean

}
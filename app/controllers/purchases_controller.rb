class PurchasesController < ApplicationController

  def index
    render json: Purchase.all
  end

  def show
    purchase = find_purchase
    render json: purchase, status: :ok
  end

  def create
    purchase = Purchase.create!(purchase_params)
    render json: purchase, status: :created
  end

  def destroy
    purchase = find_purchase
    purchase.destroy
    head :no_content
  end

  private

  def purchase_params
    params.permit(:user_id, :item_id)
  end

  def find_purchase
    Purchase.find(params[:id])
  end

end

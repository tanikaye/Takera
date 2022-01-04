class ItemsController < ApplicationController

  def index
    render json: Item.all
  end

  def show
    item = find_item
    render json: item, status: :ok
  end

  def create
    item = Item.create!(item_params)
    render json: item, status: :created
  end

  def destroy
    item = find_item
    item.destroy
    head :no_content
  end

  private

  def item_params
    params.permit(:name, :price, :image)
  end

  def find_item
    Item.find(params[:id])
  end

end

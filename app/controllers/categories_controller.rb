class CategoriesController < ApplicationController
    before_action :set_category, only: %i[ show edit update destroy ]
    skip_before_action :is_authorized, only: [:create,  :index]
    # GET /categories or /categories.json
    def index
      @categories = Category.order('id DESC')
      render json: @categories
    end

    def user_index
      categories = @user.categories.order('id DESC')
      render json: categories
    end
  
    # # GET /categories/1 or /categories/1.json
    # def show
    # end
  
    # # GET /categories/new
    # def new
    #   @category = Category.new
    # end
  
    # # GET /categories/1/edit
    # def edit
    # end
  
    # # POST /categories or /categories.json
    # def create
    #   @category = Category.new(category_params)
  
    #   respond_to do |format|
    #     if @category.save
    #       format.html { redirect_to category_url(@category), notice: "category was successfully created." }
    #       format.json { render :show, status: :created, location: @category }
    #     else
    #       format.html { render :new, status: :unprocessable_entity }
    #       format.json { render json: @category.errors, status: :unprocessable_entity }
    #     end
    #   end
    # end
  
    # # PATCH/PUT /categories/1 or /categories/1.json
    # def update
    #   respond_to do |format|
    #     if @category.update(category_params)
    #       format.html { redirect_to category_url(@category), notice: "category was successfully updated." }
    #       format.json { render :show, status: :ok, location: @category }
    #     else
    #       format.html { render :edit, status: :unprocessable_entity }
    #       format.json { render json: @category.errors, status: :unprocessable_entity }
    #     end
    #   end
    # end
  
    # # DELETE /categories/1 or /categories/1.json
    # def destroy
    #   @category.destroy
  
    #   respond_to do |format|
    #     format.html { redirect_to categories_url, notice: "category was successfully destroyed." }
    #     format.json { head :no_content }
    #   end
    # end
  
    private
      def category_params
        params.require(:category).permit(:name, :icon)
      end
    end
  

    
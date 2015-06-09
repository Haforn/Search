class UsersController < ApplicationController

	def index
	  if params[:search]
	  	@users = User.search(params[:search]).order("created_at DESC")
	  	render json: @users
		end
	end


end

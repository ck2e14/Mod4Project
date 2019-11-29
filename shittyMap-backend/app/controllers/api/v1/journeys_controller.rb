class Api::V1::JourneysController < ApplicationController
      def create
         @journey = Journey.create(journey_params)
         user = @current_user
         @journey.update(user: user)
      if @journey.valid?
         render json: @journey
      else
         render json: {errors: journey.errors.full_messages}, status: :not_accepted
      end
   end

   def index 
      @journeys = Journey.all
      render json: @journeys
   end

   def show
      @journey = Journey.find(params[:id])
      render json: @journey
   end

   private

   def journey_params
      params.require(:journey).permit(:startpoint, :endpoint, :user_id)
   end
end

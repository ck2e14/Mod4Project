class JourneySerializer < ActiveModel::Serializer
  attributes :id, :startpoint, :endpoint, :duration, :distance, :transit_mode, :user_id

  def user
    UserSerializer.new(self.object.user)
  end  
end

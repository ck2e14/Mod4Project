class JourneySerializer < ActiveModel::Serializer
  attributes :id, :startpoint, :endpoint

  def create
    
  end



  def user
    UserSerializer.new(self.object.user)
  end  
end

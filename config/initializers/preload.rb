%w{ 
  active_record/random_id 
  active_model/serialize_options 
}.each {|lib| require lib }


SuperModel::Base.send(:include, ActiveModel::SerializeOptions::Model)
ActiveRecord::Base.send(:include, ActiveModel::SerializeOptions::Model)
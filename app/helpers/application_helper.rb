module ApplicationHelper
  def user_id_meta_tag
    logged_in? ? meta_tag("user-id", current_user.id) : ""
  end
    
  protected
    def meta_tag(name, value)
      %(<meta name="#{name}" content="#{Rack::Utils.escape_html(value)}"/>).html_safe    
    end
end
